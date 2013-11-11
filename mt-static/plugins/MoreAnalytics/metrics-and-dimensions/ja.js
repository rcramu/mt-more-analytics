(function() {
  var MoreAnalyticsL10N;

  jQuery.MoreAnalyticsL10N = MoreAnalyticsL10N = (function() {
    function MoreAnalyticsL10N() {}

    MoreAnalyticsL10N.lexicon = {"metrics":{"entrances":{"l":"閲覧開始数","g":"page tracking"},"socialInteractionsPerVisit":{"l":"訪問あたりのアクション","g":"social interactions"},"entranceRate":{"l":"閲覧開始数/ページビュー数","g":"page tracking"},"metric12":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal6Completions":{"l":"Goal 6 Completions","g":"goal conversions"},"goal5Abandons":{"l":"Goal 5 Abandoned Funnels","g":"goal conversions"},"searchGoal6ConversionRate":{"l":"Goal 6 Conversion Rate","g":"internal search"},"goal14Completions":{"l":"Goal 14 Completions","g":"goal conversions"},"goal8AbandonRate":{"l":"Goal 8 Abandonment Rate","g":"goal conversions"},"adsenseAdUnitsViewed":{"l":"表示された AdSense 広告ユニット","g":"adsense"},"goalValueAll":{"l":"目標値","g":"goal conversions"},"goal11Starts":{"l":"Goal 11 Starts","g":"goal conversions"},"goal16Starts":{"l":"Goal 16 Starts","g":"goal conversions"},"goal7ConversionRate":{"l":"Goal 7 Conversion Rate","g":"goal conversions"},"totalEvents":{"l":"合計イベント数","g":"event tracking"},"searchDepth":{"l":"検索深度","g":"internal search"},"goal13AbandonRate":{"l":"Goal 13 Abandonment Rate","g":"goal conversions"},"goalValueAllPerSearch":{"l":"Per Search Goal Value","g":"internal search"},"searchGoal14ConversionRate":{"l":"Goal 14 Conversion Rate","g":"internal search"},"transactions":{"l":"トランザクション数","g":"ecommerce"},"exitRate":{"l":"離脱率","g":"page tracking"},"costPerGoalConversion":{"l":"Cost per Goal Conversion","g":"adwords"},"goal12Value":{"l":"Goal 12 Value","g":"goal conversions"},"domInteractiveTime":{"l":"Document Interactive Time (ms)","g":"site speed"},"avgRedirectionTime":{"l":"平均リダイレクト時間（秒）","g":"site speed"},"searchVisits":{"l":"検索による訪問","g":"internal search"},"uniqueScreenviews":{"l":"Unique Screen Views","g":"app tracking"},"appviews":{"l":"スクリーン ビュー","g":"app tracking"},"goal15Starts":{"l":"Goal 15 Starts","g":"goal conversions"},"pageLoadSample":{"l":"Page Load Sample","g":"site speed"},"percentVisitsWithSearch":{"l":"Visits with Search (Percentage)","g":"internal search"},"serverResponseTime":{"l":"Server Response Time (ms)","g":"site speed"},"searchRefinements":{"l":"再検索数","g":"internal search"},"localTransactionTax":{"l":"Local Tax","g":"ecommerce"},"searchGoal1ConversionRate":{"l":"Goal 1 Conversion Rate","g":"internal search"},"eventValue":{"l":"イベントの値","g":"event tracking"},"metric5":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal2Completions":{"l":"Goal 2 Completions","g":"goal conversions"},"avgTimeOnSite":{"l":"Avg. Visit Duration","g":"session"},"goal17Starts":{"l":"Goal 17 Starts","g":"goal conversions"},"searchGoal15ConversionRate":{"l":"Goal 15 Conversion Rate","g":"internal search"},"adClicks":{"l":"Clicks","g":"adwords"},"goal1Completions":{"l":"Goal 1 Completions","g":"goal conversions"},"goal18Completions":{"l":"Goal 18 Completions","g":"goal conversions"},"bounces":{"l":"直帰数","g":"session"},"goal11Abandons":{"l":"Goal 11 Abandoned Funnels","g":"goal conversions"},"transactionRevenuePerVisit":{"l":"Per Visit Value","g":"ecommerce"},"goal17ConversionRate":{"l":"Goal 17 Conversion Rate","g":"goal conversions"},"timeOnScreen":{"l":"Time on Screen","g":"app tracking"},"goal9AbandonRate":{"l":"Goal 9 Abandonment Rate","g":"goal conversions"},"adsenseRevenue":{"l":"AdSense の収益","g":"adsense"},"goal13Starts":{"l":"Goal 13 Starts","g":"goal conversions"},"goal14AbandonRate":{"l":"Goal 14 Abandonment Rate","g":"goal conversions"},"goal17Value":{"l":"Goal 17 Value","g":"goal conversions"},"goal16ConversionRate":{"l":"Goal 16 Conversion Rate","g":"goal conversions"},"adCost":{"l":"Cost","g":"adwords"},"goal8Abandons":{"l":"Goal 8 Abandoned Funnels","g":"goal conversions"},"goal10AbandonRate":{"l":"Goal 10 Abandonment Rate","g":"goal conversions"},"searchGoalConversionRateAll":{"l":"Goal Conversion Rate","g":"internal search"},"goal1Value":{"l":"Goal 1 Value","g":"goal conversions"},"fatalExceptionsPerScreenview":{"l":"Crashes / Screen","g":"exceptions"},"socialInteractions":{"l":"アクション","g":"social interactions"},"goal2ConversionRate":{"l":"Goal 2 Conversion Rate","g":"goal conversions"},"goal7AbandonRate":{"l":"Goal 7 Abandonment Rate","g":"goal conversions"},"goal15Completions":{"l":"Goal 15 Completions","g":"goal conversions"},"avgDomainLookupTime":{"l":"ドメインの平均ルックアップ時間（秒）","g":"site speed"},"metric19":{"l":"Custom Metric  Value","g":"custom variables or columns"},"adsenseECPM":{"l":"AdSense 有効 CPM","g":"adsense"},"goal13Abandons":{"l":"Goal 13 Abandoned Funnels","g":"goal conversions"},"metric11":{"l":"Custom Metric  Value","g":"custom variables or columns"},"screenviews":{"l":"Screen Views","g":"app tracking"},"goal4Value":{"l":"Goal 4 Value","g":"goal conversions"},"goal6ConversionRate":{"l":"Goal 6 Conversion Rate","g":"goal conversions"},"avgDomContentLoadedTime":{"l":"平均ドキュメント コンテンツ読み込み時間（秒）","g":"site speed"},"avgPageDownloadTime":{"l":"ページの平均ダウンロード時間（秒）","g":"site speed"},"goal14Value":{"l":"Goal 14 Value","g":"goal conversions"},"goal15AbandonRate":{"l":"Goal 15 Abandonment Rate","g":"goal conversions"},"itemsPerPurchase":{"l":"Average QTY","g":"ecommerce"},"searchGoal10ConversionRate":{"l":"Goal 10 Conversion Rate","g":"internal search"},"goal2Starts":{"l":"Goal 2 Starts","g":"goal conversions"},"impressions":{"l":"Impressions","g":"adwords"},"goal19ConversionRate":{"l":"Goal 19 Conversion Rate","g":"goal conversions"},"adsensePageImpressions":{"l":"AdSense のページ表示回数","g":"adsense"},"goal10Starts":{"l":"Goal 10 Starts","g":"goal conversions"},"metric8":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal3Completions":{"l":"Goal 3 Completions","g":"goal conversions"},"goal14Abandons":{"l":"Goal 14 Abandoned Funnels","g":"goal conversions"},"goal4Starts":{"l":"Goal 4 Starts","g":"goal conversions"},"avgDomInteractiveTime":{"l":"平均ドキュメント インタラクティブ時間（秒）","g":"site speed"},"goal11AbandonRate":{"l":"Goal 11 Abandonment Rate","g":"goal conversions"},"revenuePerItem":{"l":"Average Price","g":"ecommerce"},"avgUserTimingValue":{"l":"Avg. User Timing (sec)","g":"user timings"},"goal7Abandons":{"l":"Goal 7 Abandoned Funnels","g":"goal conversions"},"goal20Starts":{"l":"Goal 20 Starts","g":"goal conversions"},"searchGoal20ConversionRate":{"l":"Goal 20 Conversion Rate","g":"internal search"},"goal6Value":{"l":"Goal 6 Value","g":"goal conversions"},"searchExitRate":{"l":"Search Exits (Percentage)","g":"internal search"},"goalCompletionsAll":{"l":"目標の完了数","g":"goal conversions"},"goal2Abandons":{"l":"Goal 2 Abandoned Funnels","g":"goal conversions"},"metric3":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal16AbandonRate":{"l":"Goal 16 Abandonment Rate","g":"goal conversions"},"appviewsPerVisit":{"l":"Screens / Session","g":"app tracking"},"goal14Starts":{"l":"Goal 14 Starts","g":"goal conversions"},"CPM":{"l":"CPM","g":"adwords"},"goal7Value":{"l":"Goal 7 Value","g":"goal conversions"},"goal19Abandons":{"l":"Goal 19 Abandoned Funnels","g":"goal conversions"},"goal3Abandons":{"l":"Goal 3 Abandoned Funnels","g":"goal conversions"},"serverConnectionTime":{"l":"Server Connection Time (ms)","g":"site speed"},"avgPageLoadTime":{"l":"平均表示時間（秒）","g":"site speed"},"searchExits":{"l":"検索結果の離脱","g":"internal search"},"goal15Value":{"l":"Goal 15 Value","g":"goal conversions"},"goalConversionRateAll":{"l":"Goal Conversion Rate","g":"goal conversions"},"searchGoal9ConversionRate":{"l":"Goal 9 Conversion Rate","g":"internal search"},"searchGoal2ConversionRate":{"l":"Goal 2 Conversion Rate","g":"internal search"},"goal19Completions":{"l":"Goal 19 Completions","g":"goal conversions"},"goal1Starts":{"l":"Goal 1 Starts","g":"goal conversions"},"percentSearchRefinements":{"l":"再検索数の割合","g":"internal search"},"goal5Value":{"l":"Goal 5 Value","g":"goal conversions"},"localItemRevenue":{"l":"Local Product Revenue","g":"ecommerce"},"goal11ConversionRate":{"l":"Goal 11 Conversion Rate","g":"goal conversions"},"goal20Completions":{"l":"Goal 20 Completions","g":"goal conversions"},"searchGoal8ConversionRate":{"l":"Goal 8 Conversion Rate","g":"internal search"},"goal18ConversionRate":{"l":"Goal 18 Conversion Rate","g":"goal conversions"},"goal20ConversionRate":{"l":"Goal 20 Conversion Rate","g":"goal conversions"},"goal20Abandons":{"l":"Goal 20 Abandoned Funnels","g":"goal conversions"},"goal8ConversionRate":{"l":"Goal 8 Conversion Rate","g":"goal conversions"},"adsenseAdsViewed":{"l":"AdSense Ads Viewed","g":"adsense"},"goal5Starts":{"l":"Goal 5 Starts","g":"goal conversions"},"goal3Starts":{"l":"Goal 3 Starts","g":"goal conversions"},"metric7":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal10Abandons":{"l":"Goal 10 Abandoned Funnels","g":"goal conversions"},"goal12Abandons":{"l":"Goal 12 Abandoned Funnels","g":"goal conversions"},"uniqueSocialInteractions":{"l":"ユニーク アクション","g":"social interactions"},"metric4":{"l":"Custom Metric  Value","g":"custom variables or columns"},"domContentLoadedTime":{"l":"Document Content Loaded Time (ms)","g":"site speed"},"pageValue":{"l":"ページの価値","g":"page tracking"},"eventsPerVisitWithEvent":{"l":"Events / Visit","g":"event tracking"},"searchGoal13ConversionRate":{"l":"Goal 13 Conversion Rate","g":"internal search"},"goal19Starts":{"l":"Goal 19 Starts","g":"goal conversions"},"goal13Completions":{"l":"Goal 13 Completions","g":"goal conversions"},"goal10Value":{"l":"Goal 10 Value","g":"goal conversions"},"avgServerResponseTime":{"l":"サーバーの平均応答時間（秒）","g":"site speed"},"goal12Completions":{"l":"Goal 12 Completions","g":"goal conversions"},"avgEventValue":{"l":"Avg. Value","g":"event tracking"},"searchUniques":{"l":"検索回数の合計","g":"internal search"},"goalStartsAll":{"l":"目標の開始数","g":"goal conversions"},"goal5AbandonRate":{"l":"Goal 5 Abandonment Rate","g":"goal conversions"},"goal2AbandonRate":{"l":"Goal 2 Abandonment Rate","g":"goal conversions"},"goal1ConversionRate":{"l":"Goal 1 Conversion Rate","g":"goal conversions"},"goal4Abandons":{"l":"Goal 4 Abandoned Funnels","g":"goal conversions"},"timeOnPage":{"l":"ページ滞在時間","g":"page tracking"},"goal17Abandons":{"l":"Goal 17 Abandoned Funnels","g":"goal conversions"},"goal10Completions":{"l":"Goal 10 Completions","g":"goal conversions"},"goal2Value":{"l":"Goal 2 Value","g":"goal conversions"},"goal5Completions":{"l":"Goal 5 Completions","g":"goal conversions"},"metric2":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal20AbandonRate":{"l":"Goal 20 Abandonment Rate","g":"goal conversions"},"userTimingSample":{"l":"User Timing Sample","g":"user timings"},"metric20":{"l":"Custom Metric  Value","g":"custom variables or columns"},"metric1":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal16Completions":{"l":"Goal 16 Completions","g":"goal conversions"},"goal10ConversionRate":{"l":"Goal 10 Conversion Rate","g":"goal conversions"},"goal3AbandonRate":{"l":"Goal 3 Abandonment Rate","g":"goal conversions"},"redirectionTime":{"l":"Redirection Time (ms)","g":"site speed"},"itemRevenue":{"l":"商品の収益","g":"ecommerce"},"goal15ConversionRate":{"l":"Goal 15 Conversion Rate","g":"goal conversions"},"avgServerConnectionTime":{"l":"サーバーの平均接続時間（秒）","g":"site speed"},"revenuePerTransaction":{"l":"平均値","g":"ecommerce"},"goal6AbandonRate":{"l":"Goal 6 Abandonment Rate","g":"goal conversions"},"metric17":{"l":"Custom Metric  Value","g":"custom variables or columns"},"exceptionsPerScreenview":{"l":"Exceptions / Screen","g":"exceptions"},"pageLoadTime":{"l":"Page Load Time (ms)","g":"site speed"},"goalValuePerVisit":{"l":"平均目標値","g":"goal conversions"},"pageDownloadTime":{"l":"Page Download Time (ms)","g":"site speed"},"goal18AbandonRate":{"l":"Goal 18 Abandonment Rate","g":"goal conversions"},"localTransactionRevenue":{"l":"Local Revenue","g":"ecommerce"},"goal7Completions":{"l":"Goal 7 Completions","g":"goal conversions"},"goal8Starts":{"l":"Goal 8 Starts","g":"goal conversions"},"metric10":{"l":"Custom Metric  Value","g":"custom variables or columns"},"visitors":{"l":"Unique Visitors","g":"visitor"},"goal4AbandonRate":{"l":"Goal 4 Abandonment Rate","g":"goal conversions"},"RPC":{"l":"RPC","g":"adwords"},"goal4ConversionRate":{"l":"Goal 4 Conversion Rate","g":"goal conversions"},"goal20Value":{"l":"Goal 20 Value","g":"goal conversions"},"goal1AbandonRate":{"l":"Goal 1 Abandonment Rate","g":"goal conversions"},"searchGoal12ConversionRate":{"l":"Goal 12 Conversion Rate","g":"internal search"},"transactionRevenue":{"l":"収益","g":"ecommerce"},"visitsWithEvent":{"l":"Visits with Event","g":"event tracking"},"fatalExceptions":{"l":"Crashes","g":"exceptions"},"visits":{"l":"訪問数","g":"session"},"uniqueAppviews":{"l":"ユニーク スクリーン ビュー","g":"app tracking"},"exceptions":{"l":"exceptions","g":"exceptions"},"pageviewsPerVisit":{"l":"Pages / Visit","g":"page tracking"},"metric16":{"l":"Custom Metric  Value","g":"custom variables or columns"},"newVisits":{"l":"新規訪問数","g":"visitor"},"goal9Starts":{"l":"Goal 9 Starts","g":"goal conversions"},"goal3ConversionRate":{"l":"Goal 3 Conversion Rate","g":"goal conversions"},"adsenseAdsClicks":{"l":"AdSense Ads Clicked","g":"adsense"},"localTransactionShipping":{"l":"Local Shipping","g":"ecommerce"},"searchResultViews":{"l":"Results Pageviews","g":"internal search"},"goal16Abandons":{"l":"Goal 16 Abandoned Funnels","g":"goal conversions"},"avgScreenviewDuration":{"l":"Avg. Time on Screen","g":"app tracking"},"goal15Abandons":{"l":"Goal 15 Abandoned Funnels","g":"goal conversions"},"transactionShipping":{"l":"配送","g":"ecommerce"},"userTimingValue":{"l":"User Timing (ms)","g":"user timings"},"goal6Starts":{"l":"Goal 6 Starts","g":"goal conversions"},"goal13Value":{"l":"Goal 13 Value","g":"goal conversions"},"goal9Abandons":{"l":"Goal 9 Abandoned Funnels","g":"goal conversions"},"metric14":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal18Starts":{"l":"Goal 18 Starts","g":"goal conversions"},"socialActivities":{"l":"Data Hub Activities","g":"social activities"},"goal9Value":{"l":"Goal 9 Value","g":"goal conversions"},"uniquePageviews":{"l":"ページ別訪問数","g":"page tracking"},"CPC":{"l":"CPC","g":"adwords"},"timeOnSite":{"l":"訪問の滞在時間","g":"session"},"avgTimeOnPage":{"l":"Avg. Time on Page","g":"page tracking"},"avgSearchResultViews":{"l":"Results Pageviews / Search","g":"internal search"},"avgSearchDuration":{"l":"Time after Search","g":"internal search"},"goal16Value":{"l":"Goal 16 Value","g":"goal conversions"},"searchGoal4ConversionRate":{"l":"Goal 4 Conversion Rate","g":"internal search"},"transactionTax":{"l":"税金","g":"ecommerce"},"searchGoal19ConversionRate":{"l":"Goal 19 Conversion Rate","g":"internal search"},"goal19AbandonRate":{"l":"Goal 19 Abandonment Rate","g":"goal conversions"},"speedMetricsSample":{"l":"Speed Metrics Sample","g":"site speed"},"searchGoal11ConversionRate":{"l":"Goal 11 Conversion Rate","g":"internal search"},"pageviews":{"l":"ページビュー数","g":"page tracking"},"costPerConversion":{"l":"Cost per Conversion","g":"adwords"},"domainLookupTime":{"l":"Domain Lookup Time (ms)","g":"site speed"},"CTR":{"l":"CTR","g":"adwords"},"goal4Completions":{"l":"Goal 4 Completions","g":"goal conversions"},"goal12Starts":{"l":"Goal 12 Starts","g":"goal conversions"},"searchGoal17ConversionRate":{"l":"Goal 17 Conversion Rate","g":"internal search"},"metric13":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal3Value":{"l":"Goal 3 Value","g":"goal conversions"},"uniqueEvents":{"l":"ユニーク イベント数","g":"event tracking"},"searchGoal18ConversionRate":{"l":"Goal 18 Conversion Rate","g":"internal search"},"goal11Completions":{"l":"Goal 11 Completions","g":"goal conversions"},"goal8Completions":{"l":"Goal 8 Completions","g":"goal conversions"},"goal17AbandonRate":{"l":"Goal 17 Abandonment Rate","g":"goal conversions"},"searchGoal5ConversionRate":{"l":"Goal 5 Conversion Rate","g":"internal search"},"entranceBounceRate":{"l":"Bounce Rate","g":"session"},"goal7Starts":{"l":"Goal 7 Starts","g":"goal conversions"},"goal13ConversionRate":{"l":"Goal 13 Conversion Rate","g":"goal conversions"},"searchGoal3ConversionRate":{"l":"Goal 3 Conversion Rate","g":"internal search"},"goal5ConversionRate":{"l":"Goal 5 Conversion Rate","g":"goal conversions"},"goal8Value":{"l":"Goal 8 Value","g":"goal conversions"},"goalAbandonRateAll":{"l":"Total Abandonment Rate","g":"goal conversions"},"adsenseExits":{"l":"AdSense の離脱数","g":"adsense"},"goal11Value":{"l":"Goal 11 Value","g":"goal conversions"},"totalValue":{"l":"Total Value","g":"ecommerce"},"goal18Value":{"l":"Goal 18 Value","g":"goal conversions"},"goal1Abandons":{"l":"Goal 1 Abandoned Funnels","g":"goal conversions"},"goal9ConversionRate":{"l":"Goal 9 Conversion Rate","g":"goal conversions"},"domLatencyMetricsSample":{"l":"DOM Latency Metrics Sample","g":"site speed"},"searchDuration":{"l":"検索後の時間","g":"internal search"},"goal12ConversionRate":{"l":"Goal 12 Conversion Rate","g":"goal conversions"},"costPerTransaction":{"l":"Cost per Transaction","g":"adwords"},"metric9":{"l":"Custom Metric  Value","g":"custom variables or columns"},"itemQuantity":{"l":"数量","g":"ecommerce"},"searchGoal7ConversionRate":{"l":"Goal 7 Conversion Rate","g":"internal search"},"uniquePurchases":{"l":"固有の購入数","g":"ecommerce"},"metric15":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal18Abandons":{"l":"Goal 18 Abandoned Funnels","g":"goal conversions"},"adsenseCTR":{"l":"AdSense クリック率","g":"adsense"},"searchGoal16ConversionRate":{"l":"Goal 16 Conversion Rate","g":"internal search"},"exits":{"l":"離脱数","g":"page tracking"},"ROI":{"l":"ROI","g":"adwords"},"goal6Abandons":{"l":"Goal 6 Abandoned Funnels","g":"goal conversions"},"visitBounceRate":{"l":"Bounce Rate","g":"session"},"metric6":{"l":"Custom Metric  Value","g":"custom variables or columns"},"percentNewVisits":{"l":"新規訪問の割合","g":"visitor"},"transactionsPerVisit":{"l":"e コマースのコンバージョン率","g":"ecommerce"},"metric18":{"l":"Custom Metric  Value","g":"custom variables or columns"},"goal19Value":{"l":"Goal 19 Value","g":"goal conversions"},"goal12AbandonRate":{"l":"Goal 12 Abandonment Rate","g":"goal conversions"},"screenviewsPerSession":{"l":"Screens / Session","g":"app tracking"},"goal14ConversionRate":{"l":"Goal 14 Conversion Rate","g":"goal conversions"},"goal9Completions":{"l":"Goal 9 Completions","g":"goal conversions"},"goal17Completions":{"l":"Goal 17 Completions","g":"goal conversions"},"goalAbandonsAll":{"l":"Abandoned Funnels","g":"goal conversions"},"margin":{"l":"利益率","g":"adwords"},"organicSearches":{"l":"Organic Searches","g":"traffic sources"},"avgSearchDepth":{"l":"Search Depth","g":"internal search"}},"dimensions":{"adMatchedQuery":{"l":"Matched Search Query","g":"adwords"},"date":{"l":"日付","g":"time"},"eventCategory":{"l":"イベント カテゴリ","g":"event tracking"},"flashVersion":{"l":"Flash のバージョン","g":"system"},"nthMonth":{"l":"Month","g":"time"},"socialInteractionNetwork":{"l":"Social Source","g":"social interactions"},"javaEnabled":{"l":"Java サポート","g":"system"},"socialNetwork":{"l":"ソーシャル メディア","g":"traffic sources"},"appVersion":{"l":"アプリのバージョン","g":"app tracking"},"socialInteractionTarget":{"l":"Social Entity","g":"social interactions"},"searchKeywordRefinement":{"l":"再検索キーワード","g":"internal search"},"latitude":{"l":"Latitude","g":"geo network"},"dimension14":{"l":"Custom Dimension","g":"custom variables or columns"},"customVarValue16":{"l":"Custom Variable (Value 016)","g":"custom variables or columns"},"metro":{"l":"Metro","g":"geo network"},"customVarValue4":{"l":"Custom Variable (Value 04)","g":"custom variables or columns"},"pageDepth":{"l":"訪問時のページ数","g":"page tracking"},"longitude":{"l":"Longitude","g":"geo network"},"adwordsCreativeID":{"l":"AdWords Creative ID","g":"adwords"},"customVarName11":{"l":"Custom Variable (Key 11)","g":"custom variables or columns"},"socialActivityUserPhotoUrl":{"l":"User Photo URL","g":"social activities"},"dimension4":{"l":"Custom Dimension","g":"custom variables or columns"},"customVarName15":{"l":"Custom Variable (Key 15)","g":"custom variables or columns"},"socialInteractionAction":{"l":"Social Action","g":"social interactions"},"continent":{"l":"大陸","g":"geo network"},"screenName":{"l":"Screen Name","g":"app tracking"},"dimension11":{"l":"Custom Dimension","g":"custom variables or columns"},"pageTitle":{"l":"ページ タイトル","g":"page tracking"},"visitLength":{"l":"Visit Duration","g":"session"},"month":{"l":"Month of the year","g":"time"},"customVarName19":{"l":"Custom Variable (Key 19)","g":"custom variables or columns"},"searchCategory":{"l":"サイト内検索のカテゴリ","g":"internal search"},"productName":{"l":"Product","g":"ecommerce"},"sourceMedium":{"l":"参照元/メディア","g":"traffic sources"},"customVarValue6":{"l":"Custom Variable (Value 06)","g":"custom variables or columns"},"customVarName1":{"l":"Custom Variable (Key 1)","g":"custom variables or columns"},"customVarName6":{"l":"Custom Variable (Key 6)","g":"custom variables or columns"},"productSku":{"l":"Product SKU","g":"ecommerce"},"pagePathLevel2":{"l":"第 2 階層","g":"page tracking"},"daysToTransaction":{"l":"購入までの日数","g":"ecommerce"},"customVarName18":{"l":"Custom Variable (Key 18)","g":"custom variables or columns"},"dimension8":{"l":"Custom Dimension","g":"custom variables or columns"},"customVarValue18":{"l":"Custom Variable (Value 018)","g":"custom variables or columns"},"customVarValue2":{"l":"Custom Variable (Value 02)","g":"custom variables or columns"},"exceptionDescription":{"l":"Exception Description","g":"exceptions"},"previousPagePath":{"l":"前のページ遷移","g":"page tracking"},"eventAction":{"l":"イベント アクション","g":"event tracking"},"eventLabel":{"l":"イベント ラベル","g":"event tracking"},"goalPreviousStep2":{"l":"Goal Previous Step - 2","g":"goal conversions"},"nthWeek":{"l":"Week","g":"time"},"customVarName3":{"l":"Custom Variable (Key 3)","g":"custom variables or columns"},"dayOfWeek":{"l":"曜日","g":"time"},"dimension20":{"l":"Custom Dimension","g":"custom variables or columns"},"dimension18":{"l":"Custom Dimension","g":"custom variables or columns"},"pagePathLevel4":{"l":"第 4 階層","g":"page tracking"},"socialActivityTagsSummary":{"l":"Social Tags Summary","g":"social activities"},"customVarName13":{"l":"Custom Variable (Key 13)","g":"custom variables or columns"},"dimension16":{"l":"Custom Dimension","g":"custom variables or columns"},"landingScreenName":{"l":"Landing Screen","g":"app tracking"},"productCategory":{"l":"Product Category","g":"ecommerce"},"pagePathLevel1":{"l":"第 1 階層","g":"page tracking"},"adDistributionNetwork":{"l":"広告掲載ネットワーク","g":"adwords"},"customVarValue19":{"l":"Custom Variable (Value 019)","g":"custom variables or columns"},"adwordsAdGroupID":{"l":"AdWords Ad Group ID","g":"adwords"},"userTimingVariable":{"l":"速度の変数","g":"user timings"},"customVarValue12":{"l":"Custom Variable (Value 012)","g":"custom variables or columns"},"customVarName5":{"l":"Custom Variable (Key 5)","g":"custom variables or columns"},"secondPagePath":{"l":"Second Page","g":"page tracking"},"dayOfWeekName":{"l":"曜日の名前","g":"time"},"userTimingLabel":{"l":"速度のラベル","g":"user timings"},"adGroup":{"l":"広告グループ","g":"adwords"},"affiliation":{"l":"アフィリエーション","g":"ecommerce"},"screenDepth":{"l":"Screen Depth","g":"app tracking"},"appName":{"l":"アプリ名","g":"app tracking"},"dimension13":{"l":"Custom Dimension","g":"custom variables or columns"},"screenResolution":{"l":"画面の解像度","g":"system"},"city":{"l":"市区町村","g":"geo network"},"dimension2":{"l":"Custom Dimension","g":"custom variables or columns"},"adSlot":{"l":"広告スロット","g":"adwords"},"screenColors":{"l":"画面の色","g":"system"},"currencyCode":{"l":"通貨コード","g":"ecommerce"},"adwordsCriteriaID":{"l":"AdWords Criteria ID","g":"adwords"},"isoWeek":{"l":"ISO week of the year","g":"time"},"searchUsed":{"l":"サイト内検索のステータス","g":"internal search"},"mobileDeviceMarketingName":{"l":"携帯端末のマーケティング名","g":"platform or device"},"customVarName8":{"l":"Custom Variable (Key 8)","g":"custom variables or columns"},"userDefinedValue":{"l":"ユーザー定義値","g":"visitor"},"customVarName20":{"l":"Custom Variable (Key 20)","g":"custom variables or columns"},"adMatchType":{"l":"Query Match Type","g":"adwords"},"dimension5":{"l":"Custom Dimension","g":"custom variables or columns"},"hour":{"l":"時","g":"time"},"dimension15":{"l":"Custom Dimension","g":"custom variables or columns"},"customVarName2":{"l":"Custom Variable (Key 2)","g":"custom variables or columns"},"customVarName10":{"l":"Custom Variable (Key 10)","g":"custom variables or columns"},"dimension9":{"l":"Custom Dimension","g":"custom variables or columns"},"mobileDeviceBranding":{"l":"携帯端末ブランド","g":"platform or device"},"subContinent":{"l":"亜大陸","g":"geo network"},"hostname":{"l":"ホスト名","g":"page tracking"},"customVarValue1":{"l":"Custom Variable (Value 01)","g":"custom variables or columns"},"isoYearIsoWeek":{"l":"ISO Week of ISO Year","g":"time"},"customVarValue7":{"l":"Custom Variable (Value 07)","g":"custom variables or columns"},"networkLocation":{"l":"サービス プロバイダ","g":"geo network"},"campaign":{"l":"キャンペーン","g":"traffic sources"},"appId":{"l":"アプリケーション ID","g":"app tracking"},"day":{"l":"Day of the month","g":"time"},"adKeywordMatchType":{"l":"Keyword Match Type","g":"adwords"},"referralPath":{"l":"参照 URL","g":"traffic sources"},"socialActivityPost":{"l":"Social Activity Post","g":"social activities"},"customVarValue9":{"l":"Custom Variable (Value 09)","g":"custom variables or columns"},"customVarValue17":{"l":"Custom Variable (Value 017)","g":"custom variables or columns"},"nextPagePath":{"l":"次のページ遷移","g":"page tracking"},"dimension10":{"l":"Custom Dimension","g":"custom variables or columns"},"region":{"l":"地域","g":"geo network"},"socialActivityEndorsingUrl":{"l":"Endorsing URL","g":"social activities"},"customVarName12":{"l":"Custom Variable (Key 12)","g":"custom variables or columns"},"customVarValue15":{"l":"Custom Variable (Value 015)","g":"custom variables or columns"},"customVarName16":{"l":"Custom Variable (Key 16)","g":"custom variables or columns"},"customVarName9":{"l":"Custom Variable (Key 9)","g":"custom variables or columns"},"customVarValue14":{"l":"Custom Variable (Value 014)","g":"custom variables or columns"},"socialActivityAction":{"l":"Originating Social Action","g":"social activities"},"searchStartPage":{"l":"開始ページ","g":"internal search"},"keyword":{"l":"キーワード","g":"traffic sources"},"source":{"l":"参照元","g":"traffic sources"},"fullReferrer":{"l":"完全なリファラー","g":"traffic sources"},"mobileDeviceInfo":{"l":"携帯端末の情報","g":"platform or device"},"customVarValue5":{"l":"Custom Variable (Value 05)","g":"custom variables or columns"},"isMobile":{"l":"モバイル（タブレットを含む）","g":"platform or device"},"pagePathLevel3":{"l":"第 3 階層","g":"page tracking"},"appInstallerId":{"l":"アプリケーション インストーラ ID","g":"app tracking"},"adTargetingOption":{"l":"Placement Type","g":"adwords"},"goalPreviousStep1":{"l":"Goal Previous Step - 1","g":"goal conversions"},"mobileDeviceModel":{"l":"携帯端末モデル","g":"platform or device"},"yearMonth":{"l":"月（年間）","g":"time"},"medium":{"l":"メディア","g":"traffic sources"},"socialEngagementType":{"l":"ソーシャル タイプ","g":"social interactions"},"visitCount":{"l":"Count of Visits","g":"visitor"},"deviceCategory":{"l":"デバイス カテゴリ","g":"platform or device"},"country":{"l":"国/地域","g":"geo network"},"socialActivityContentUrl":{"l":"Shared URL","g":"social activities"},"language":{"l":"言語","g":"system"},"customVarValue20":{"l":"Custom Variable (Value 020)","g":"custom variables or columns"},"customVarValue10":{"l":"Custom Variable (Value 010)","g":"custom variables or columns"},"isTablet":{"l":"Tablet","g":"platform or device"},"dimension7":{"l":"Custom Dimension","g":"custom variables or columns"},"experimentVariant":{"l":"Variation","g":"content experiments"},"isoYear":{"l":"ISO Year","g":"time"},"adSlotPosition":{"l":"広告スロット位置","g":"adwords"},"adwordsCustomerID":{"l":"AdWords Customer ID","g":"adwords"},"customVarValue3":{"l":"Custom Variable (Value 03)","g":"custom variables or columns"},"customVarName17":{"l":"Custom Variable (Key 17)","g":"custom variables or columns"},"adFormat":{"l":"Ad Format","g":"adwords"},"goalPreviousStep3":{"l":"Goal Previous Step - 3","g":"goal conversions"},"mobileInputSelector":{"l":"モバイル入力セレクタ","g":"platform or device"},"year":{"l":"Year","g":"time"},"landingPagePath":{"l":"ランディング ページ","g":"page tracking"},"exitPagePath":{"l":"離脱ページ","g":"page tracking"},"adPlacementUrl":{"l":"Placement URL","g":"adwords"},"searchDestinationPage":{"l":"リンク先ページ","g":"internal search"},"hasSocialSourceReferral":{"l":"ソーシャル メディアからの参照","g":"traffic sources"},"browser":{"l":"ブラウザ","g":"platform or device"},"adPlacementDomain":{"l":"Placement Domain","g":"adwords"},"operatingSystemVersion":{"l":"OS のバージョン","g":"platform or device"},"dateHour":{"l":"時間帯","g":"time"},"nthDay":{"l":"Day","g":"time"},"dimension1":{"l":"Custom Dimension","g":"custom variables or columns"},"customVarValue11":{"l":"Custom Variable (Value 011)","g":"custom variables or columns"},"socialActivityTimestamp":{"l":"Social Activity Timestamp","g":"social activities"},"daysSinceLastVisit":{"l":"リピートの間隔","g":"visitor"},"searchKeyword":{"l":"検索クエリ","g":"internal search"},"dimension17":{"l":"Custom Dimension","g":"custom variables or columns"},"adContent":{"l":"広告のコンテンツ","g":"traffic sources"},"adTargetingType":{"l":"Targeting Type","g":"adwords"},"experimentId":{"l":"Experiment ID","g":"content experiments"},"networkDomain":{"l":"ネットワーク ドメイン","g":"geo network"},"customVarName14":{"l":"Custom Variable (Key 14)","g":"custom variables or columns"},"socialActivityUserProfileUrl":{"l":"User Profile URL","g":"social activities"},"customVarValue13":{"l":"Custom Variable (Value 013)","g":"custom variables or columns"},"socialActivityDisplayName":{"l":"Display Name","g":"social activities"},"pagePath":{"l":"ページ","g":"page tracking"},"dimension3":{"l":"Custom Dimension","g":"custom variables or columns"},"transactionId":{"l":"トランザクション","g":"ecommerce"},"yearWeek":{"l":"週（年間）","g":"time"},"adDestinationUrl":{"l":"Destination URL","g":"adwords"},"customVarValue8":{"l":"Custom Variable (Value 08)","g":"custom variables or columns"},"visitorType":{"l":"ユーザーの種類","g":"visitor"},"adwordsCampaignID":{"l":"AdWords Campaign ID","g":"adwords"},"visitsToTransaction":{"l":"Visits to Transaction","g":"ecommerce"},"dimension6":{"l":"Custom Dimension","g":"custom variables or columns"},"goalCompletionLocation":{"l":"Goal Completion Location","g":"goal conversions"},"operatingSystem":{"l":"オペレーティング システム","g":"platform or device"},"customVarName4":{"l":"Custom Variable (Key 4)","g":"custom variables or columns"},"customVarName7":{"l":"Custom Variable (Key 7)","g":"custom variables or columns"},"week":{"l":"Week of the year","g":"time"},"dimension19":{"l":"Custom Dimension","g":"custom variables or columns"},"browserVersion":{"l":"ブラウザのバージョン","g":"platform or device"},"adDisplayUrl":{"l":"Display URL","g":"adwords"},"socialActivityNetworkAction":{"l":"Social Network and Action","g":"social activities"},"exitScreenName":{"l":"Exit Screen","g":"app tracking"},"socialInteractionNetworkAction":{"l":"Social Source and Action","g":"social interactions"},"dimension12":{"l":"Custom Dimension","g":"custom variables or columns"},"socialActivityUserHandle":{"l":"Social User Handle","g":"social activities"},"userTimingCategory":{"l":"速度のカテゴリ","g":"user timings"}}};

    return MoreAnalyticsL10N;

  })();

}).call(this);
