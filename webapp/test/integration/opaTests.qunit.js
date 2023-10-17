sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'easi/test/integration/FirstJourney',
		'easi/test/integration/pages/EASIList',
		'easi/test/integration/pages/EASIObjectPage'
    ],
    function(JourneyRunner, opaJourney, EASIList, EASIObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('easi') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEASIList: EASIList,
					onTheEASIObjectPage: EASIObjectPage
                }
            },
            opaJourney.run
        );
    }
);