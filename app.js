(function(){
    var all_employers = [
        {
            'nome':'Lucas Batista Fernandes',
            'cargo':'Analista de Sistemas',
            'idade':32
        },
        {
            'nome':'Gilberto Takahashi',
            'cargo':'Gerente Técnico',
            'idade':50
        },
        {
            'nome':'Giovanni ',
            'cargo':'Engenheiro de Minas',
            'idade':28,
            'ex':true
        },
        {
            'nome':'Alex ',
            'cargo':'Assistente Administrativo',
            'idade':28,
            'ex':false
        }
    ];

    var app = angular.module("info",[]);
    app.controller("employerController",function(){
        this.empregados = all_employers;
    });
    //New controller
    var team_descriptions =[
        {
            label:"Geologia",
            softwares:"Studio RM,GDMS,Sirovision, Core Shed, Strad3D, Ore Controller"
        },
        {
            label:"Engenharia",
            softwares:"Studio OP,Studio UG,NPV, EPS, SOT, AEGIS, Datablast"
        },
        {
            label:"Geoestatística",
            softwares:"Unfold, Enhanced Geostatistics"
        }
    ]
    app.controller("PanelController",function(){
        this.tab = 0;
        this.setTab = function(tab){
            this.tab = tab;
        }
        this.teams = team_descriptions;
    });
})()