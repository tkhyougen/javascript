
//①最上位ノードdocument以下をDOMがすべて読みこまれたときにFunction以下を実行する
$(document).ready(function(){

//----
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    //⑥対象要素sum_indicate"が変数sumに代入されたテキスト情報を取得
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average =sum/subject_points.length;
    $("#average_indicate").text(average);
  };
//----

  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む

      let average=Number($("#average_indicate").text());

      switch(true){
        case(average>=80):
        return $("#evaluation").text("A");
        break;
        case(average>=60):
        return $("#evaluation").text("B");
        break;
        case(average>=40):
        return $("#evaluation").text("C");
        break;
        default:
        return $("#evaluation").text("D");
      }

  }

//-----
  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
                                    //④national_language(国語)で入力されたvalue属性の値を取得する
                                    //⑤Numberは文字列を数値に変換する
      let subject_points = [Number($('#national_language').val()),
                            Number($('#english').val()),
                            Number($('#mathematics').val()),
                            Number($('#science').val()),
                            Number($('#society').val())
                            ];
        for(let i=0; i<subject_points.length; i++){
          if (subject_points[i]>=60){
          return $("#judge").text("合格");
          }else{
          return $("#judge").text("不合格");
          };
        };

  };
//----

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let getachievement=$("#evaluation").text();
    let passorfailure =$("#judge").text();
    $("#alert-indicate").remove();

    //⑦#decration要素にappend以下の()引数で指定したコンテンツを追加する
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${getachievement}です。${passorfailure}です</label>`);
    };

    //③以下id #○○でそれぞれ対応する国語、英語、数学、理科、社会のinput入力が変更された際にfunction以下を実行
    $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
    });

    // ②id"btn-evaluation"をつけている「ランク」をクリックした際にfunction以下を実行
    $('#btn-evaluation').click(function() {
    get_achievement();
    });

    $('#btn-judge').click(function() {
    get_pass_or_failure();
    });

    $('#btn-declaration').click(function() {
    judgement();
    });


});
