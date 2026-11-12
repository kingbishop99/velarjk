import{cW as e,cP as t,cQ as i,cR as r}from"./bdfd49fe-c001-408d-a96d-762e773b1808.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let l=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};l.styles=o,l=function(e,t,i,r){var o,l=arguments.length,c=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(l<3?o(c):l>3?o(t,i,c):o(t,i))||c);return l>3&&c&&Object.defineProperty(t,i,c),c}([r("w3m-transactions-view")],l);export{l as W3mTransactionsView};
