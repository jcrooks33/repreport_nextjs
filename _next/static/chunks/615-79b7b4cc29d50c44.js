(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{3027:(e,t,r)=>{"use strict";var a=r(2115),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useState,s=a.useEffect,o=a.useLayoutEffect,l=a.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),a=i({inst:{value:r,getSnapshot:t}}),n=a[0].inst,d=a[1];return o(function(){n.value=r,n.getSnapshot=t,c(n)&&d({inst:n})},[e,r,t]),s(function(){return c(n)&&d({inst:n}),e(function(){c(n)&&d({inst:n})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:d},4236:(e,t,r)=>{"use strict";e.exports=r(3027)},9563:()=>{},4761:e=>{e.exports={verified:"icons_verified__1eJnA"}},8462:e=>{e.exports={root:"quoted-tweet-body_root__szSfI"}},3657:e=>{e.exports={root:"quoted-tweet-container_root__92393",article:"quoted-tweet-container_article__FoJQN"}},3955:e=>{e.exports={header:"quoted-tweet-header_header___qrcQ",avatar:"quoted-tweet-header_avatar__lGzrW",avatarSquare:"quoted-tweet-header_avatarSquare__l_eYT",author:"quoted-tweet-header_author__k48VI",authorText:"quoted-tweet-header_authorText__FULly",username:"quoted-tweet-header_username__YLPXR"}},7293:e=>{e.exports={skeleton:"skeleton_skeleton__gUMqh",loading:"skeleton_loading__XZoZ6"}},2409:e=>{e.exports={actions:"tweet-actions_actions__UDw7H",like:"tweet-actions_like__H1xYv",reply:"tweet-actions_reply__S4rFc",copy:"tweet-actions_copy__Tbdg_",likeIconWrapper:"tweet-actions_likeIconWrapper__JQkhp",likeCount:"tweet-actions_likeCount__MyxBd",replyIconWrapper:"tweet-actions_replyIconWrapper__NVdGa",copyIconWrapper:"tweet-actions_copyIconWrapper__toM2y",likeIcon:"tweet-actions_likeIcon__fhDng",replyIcon:"tweet-actions_replyIcon__MI2tG",copyIcon:"tweet-actions_copyIcon__SEaWw",replyText:"tweet-actions_replyText__doQct",copyText:"tweet-actions_copyText__fEqBx"}},3046:e=>{e.exports={root:"tweet-body_root__ChzUj"}},8193:e=>{e.exports={root:"tweet-container_root__0rJLq",article:"tweet-container_article__0ERPK"}},8011:e=>{e.exports={header:"tweet-header_header__CXzdi",avatar:"tweet-header_avatar__0Wi9G",avatarOverflow:"tweet-header_avatarOverflow__E2gxj",avatarSquare:"tweet-header_avatarSquare__uIUBO",avatarShadow:"tweet-header_avatarShadow__CB9Zo",author:"tweet-header_author___jWoR",authorLink:"tweet-header_authorLink__qj5Sm",authorVerified:"tweet-header_authorVerified__OFYo2",authorLinkText:"tweet-header_authorLinkText__y6HdU",authorMeta:"tweet-header_authorMeta__gIC3U",authorFollow:"tweet-header_authorFollow__w_j4h",username:"tweet-header_username__UebZb",follow:"tweet-header_follow__Fi7bf",separator:"tweet-header_separator__d4pqe",brand:"tweet-header_brand__0FLQl",twitterIcon:"tweet-header_twitterIcon__m0Rzu"}},6854:e=>{e.exports={root:"tweet-in-reply-to_root__o784R"}},6647:e=>{e.exports={root:"tweet-info-created-at_root__KaxZi"}},634:e=>{e.exports={info:"tweet-info_info__ll_kH",infoLink:"tweet-info_infoLink__xdgYO",infoIcon:"tweet-info_infoIcon__S8lzA"}},426:e=>{e.exports={root:"tweet-link_root__4EzRS"}},1236:e=>{e.exports={anchor:"tweet-media-video_anchor__EMqq1",videoButton:"tweet-media-video_videoButton__P9iF2",videoButtonIcon:"tweet-media-video_videoButtonIcon__7gRo1",watchOnTwitter:"tweet-media-video_watchOnTwitter__2ucCU",viewReplies:"tweet-media-video_viewReplies__dp8G_"}},2274:e=>{e.exports={root:"tweet-media_root__k6gQ2",rounded:"tweet-media_rounded__LgwFx",mediaWrapper:"tweet-media_mediaWrapper__6rfqr",grid2Columns:"tweet-media_grid2Columns__tO2Ea",grid3:"tweet-media_grid3__XbH4s",grid2x2:"tweet-media_grid2x2__Wiunq",mediaContainer:"tweet-media_mediaContainer__rjXGp",mediaLink:"tweet-media_mediaLink__vFkZL",skeleton:"tweet-media_skeleton__qZmSS",image:"tweet-media_image__yoPJg"}},6146:e=>{e.exports={root:"tweet-not-found_root__KQedq"}},3958:e=>{e.exports={replies:"tweet-replies_replies__PUxl8",link:"tweet-replies_link__roxYQ",text:"tweet-replies_text__o0Naf"}},9361:e=>{e.exports={root:"tweet-skeleton_root__1sn43"}},6012:e=>{e.exports={verifiedOld:"verified-badge_verifiedOld__zcaba",verifiedBlue:"verified-badge_verifiedBlue__s3_Vu",verifiedGovernment:"verified-badge_verifiedGovernment__qRJxq"}},1615:(e,t,r)=>{"use strict";let a;r.d(t,{Y:()=>td});var n=r(5155);let i=function(){for(var e,t,r=0,a="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,a,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(a=e(t[r]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a)}return n}(e))&&(a&&(a+=" "),a+=t);return a};var s=r(8193);r(9563);let o=({className:e,children:t})=>(0,n.jsx)("div",{className:i("react-tweet-theme",s.root,e),children:(0,n.jsx)("article",{className:s.article,children:t})});var l=r(7293);let c=({style:e})=>(0,n.jsx)("span",{className:l.skeleton,style:e});var d=r(9361);let u=()=>(0,n.jsxs)(o,{className:d.root,children:[(0,n.jsx)(c,{style:{height:"3rem",marginBottom:"0.75rem"}}),(0,n.jsx)(c,{style:{height:"6rem",margin:"0.5rem 0"}}),(0,n.jsx)("div",{style:{borderTop:"var(--tweet-border)",margin:"0.5rem 0"}}),(0,n.jsx)(c,{style:{height:"2rem"}}),(0,n.jsx)(c,{style:{height:"2rem",borderRadius:"9999px",marginTop:"0.5rem"}})]});var _=r(6146);let h=e=>(0,n.jsx)(o,{children:(0,n.jsxs)("div",{className:_.root,children:[(0,n.jsx)("h3",{children:"Tweet not found"}),(0,n.jsx)("p",{children:"The embedded tweet could not be found…"})]})}),f=e=>(0,n.jsx)("img",{...e});var p=r(8011),m=r(4761);let x=()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24","aria-label":"Verified account",role:"img",className:m.verified,children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"})})}),v=()=>(0,n.jsx)("svg",{viewBox:"0 0 22 22","aria-label":"Verified account",role:"img",className:m.verified,children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{clipRule:"evenodd",d:"M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",fillRule:"evenodd"})})}),w=()=>(0,n.jsx)("svg",{viewBox:"0 0 22 22","aria-label":"Verified account",role:"img",className:m.verified,children:(0,n.jsxs)("g",{children:[(0,n.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"0-a",x1:"4.411",x2:"18.083",y1:"2.495",y2:"21.508",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#f4e72a"}),(0,n.jsx)("stop",{offset:".539",stopColor:"#cd8105"}),(0,n.jsx)("stop",{offset:".68",stopColor:"#cb7b00"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#f4ec26"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#f4e72a"})]}),(0,n.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"0-b",x1:"5.355",x2:"16.361",y1:"3.395",y2:"19.133",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#f9e87f"}),(0,n.jsx)("stop",{offset:".406",stopColor:"#e2b719"}),(0,n.jsx)("stop",{offset:".989",stopColor:"#e2b719"})]}),(0,n.jsxs)("g",{clipRule:"evenodd",fillRule:"evenodd",children:[(0,n.jsx)("path",{d:"M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",fill:"url(#0-a)"}),(0,n.jsx)("path",{d:"M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",fill:"url(#0-b)"}),(0,n.jsx)("path",{d:"M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z",fill:"#d18800"})]})]})});var g=r(6012);let j=({user:e,className:t})=>{let r=e.verified||e.is_blue_verified||e.verified_type,a=(0,n.jsx)(x,{}),s=g.verifiedBlue;if(r)switch(e.is_blue_verified||(s=g.verifiedOld),e.verified_type){case"Government":a=(0,n.jsx)(v,{}),s=g.verifiedGovernment;break;case"Business":a=(0,n.jsx)(w,{}),s=null}return r?(0,n.jsx)("div",{className:i(t,s),children:a}):null},y=({tweet:e,components:t})=>{var r;let a=null!=(r=null==t?void 0:t.AvatarImg)?r:f,{user:s}=e;return(0,n.jsxs)("div",{className:p.header,children:[(0,n.jsxs)("a",{href:e.url,className:p.avatar,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("div",{className:i(p.avatarOverflow,"Square"===s.profile_image_shape&&p.avatarSquare),children:(0,n.jsx)(a,{src:s.profile_image_url_https,alt:s.name,width:48,height:48})}),(0,n.jsx)("div",{className:p.avatarOverflow,children:(0,n.jsx)("div",{className:p.avatarShadow})})]}),(0,n.jsxs)("div",{className:p.author,children:[(0,n.jsxs)("a",{href:e.url,className:p.authorLink,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("div",{className:p.authorLinkText,children:(0,n.jsx)("span",{title:s.name,children:s.name})}),(0,n.jsx)(j,{user:s,className:p.authorVerified})]}),(0,n.jsxs)("div",{className:p.authorMeta,children:[(0,n.jsx)("a",{href:e.url,className:p.username,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)("span",{title:`@${s.screen_name}`,children:["@",s.screen_name]})}),(0,n.jsxs)("div",{className:p.authorFollow,children:[(0,n.jsx)("span",{className:p.separator,children:"\xb7"}),(0,n.jsx)("a",{href:s.follow_url,className:p.follow,target:"_blank",rel:"noopener noreferrer",children:"Follow"})]})]})]}),(0,n.jsx)("a",{href:e.url,className:p.brand,target:"_blank",rel:"noopener noreferrer","aria-label":"View on Twitter",children:(0,n.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:p.twitterIcon,children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})})]})};var b=r(6854);let k=({tweet:e})=>(0,n.jsxs)("a",{href:e.in_reply_to_url,className:b.root,target:"_blank",rel:"noopener noreferrer",children:["Replying to @",e.in_reply_to_screen_name]});var N=r(426);let S=({href:e,children:t})=>(0,n.jsx)("a",{href:e,className:N.root,target:"_blank",rel:"noopener noreferrer nofollow",children:t});var L=r(3046);let T=({tweet:e})=>(0,n.jsx)("p",{className:L.root,lang:e.lang,dir:"auto",children:e.entities.map((e,t)=>{switch(e.type){case"hashtag":case"mention":case"url":case"symbol":return(0,n.jsx)(S,{href:e.href,children:e.text},t);case"media":return;default:return(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}},t)}})});var O=r(2115);let I=e=>`https://x.com/${e.user.screen_name}/status/${e.id_str}`,R=e=>`https://x.com/${"string"==typeof e?e:e.user.screen_name}`,E=e=>`https://x.com/intent/like?tweet_id=${e.id_str}`,C=e=>`https://x.com/intent/tweet?in_reply_to=${e.id_str}`,q=e=>`https://x.com/intent/follow?screen_name=${e.user.screen_name}`,M=e=>`https://x.com/hashtag/${e.text}`,$=e=>`https://x.com/search?q=%24${e.text}`,z=e=>`https://x.com/${e.in_reply_to_screen_name}/status/${e.in_reply_to_status_id_str}`,V=(e,t)=>{let r=new URL(e.media_url_https),a=r.pathname.split(".").pop();return a?(r.pathname=r.pathname.replace(`.${a}`,""),r.searchParams.set("format",a),r.searchParams.set("name",t),r.toString()):e.media_url_https},F=e=>{let{variants:t}=e.video_info;return t.filter(e=>"video/mp4"===e.content_type).sort((e,t)=>{var r,a;return(null!=(r=t.bitrate)?r:0)-(null!=(a=e.bitrate)?a:0)})},B=e=>{let t=F(e);return t.length>1?t[1]:t[0]},W=e=>e>999999?`${(e/1e6).toFixed(1)}M`:e>999?`${(e/1e3).toFixed(1)}K`:e.toString();function D(e){let t=Array.from(e.text),r=[{indices:e.display_text_range,type:"text"}];return P(r,"hashtag",e.entities.hashtags),P(r,"mention",e.entities.user_mentions),P(r,"url",e.entities.urls),P(r,"symbol",e.entities.symbols),e.entities.media&&P(r,"media",e.entities.media),function(e,t){e.entities.media&&e.entities.media[0].indices[0]<e.display_text_range[1]&&(e.display_text_range[1]=e.entities.media[0].indices[0]);let r=t.at(-1);r&&r.indices[1]>e.display_text_range[1]&&(r.indices[1]=e.display_text_range[1])}(e,r),r.map(e=>{let r=t.slice(e.indices[0],e.indices[1]).join("");switch(e.type){case"hashtag":return Object.assign(e,{href:M(e),text:r});case"mention":return Object.assign(e,{href:R(e.screen_name),text:r});case"url":case"media":return Object.assign(e,{href:e.expanded_url,text:e.display_url});case"symbol":return Object.assign(e,{href:$(e),text:r});default:return Object.assign(e,{text:r})}})}function P(e,t,r){for(let a of r)for(let[r,n]of e.entries()){if(n.indices[0]>a.indices[0]||n.indices[1]<a.indices[1])continue;let i=[{...a,type:t}];n.indices[0]<a.indices[0]&&i.unshift({indices:[n.indices[0],a.indices[0]],type:"text"}),n.indices[1]>a.indices[1]&&i.push({indices:[a.indices[1],n.indices[1]],type:"text"}),e.splice(r,1,...i);break}}let U=e=>({...e,url:I(e),user:{...e.user,url:R(e),follow_url:q(e)},like_url:E(e),reply_url:C(e),in_reply_to_url:e.in_reply_to_screen_name?z(e):void 0,entities:D(e),quoted_tweet:e.quoted_tweet?{...e.quoted_tweet,url:I(e.quoted_tweet),entities:D(e.quoted_tweet)}:void 0});var A=r(2274),G=r(1236);let H=e=>{let{tweet:t,media:r}=e,[a,s]=(0,O.useState)(!0),[o,l]=(0,O.useState)(!1),[c,d]=(0,O.useState)(!1),u=B(r),_=0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("video",{className:A.image,poster:V(r,"small"),controls:!a,playsInline:!0,preload:"none",tabIndex:a?-1:0,onPlay:()=>{_&&window.clearTimeout(_),o||l(!0),c&&d(!1)},onPause:()=>{_&&window.clearTimeout(_),_=window.setTimeout(()=>{o&&l(!1),_=0},100)},onEnded:()=>{d(!0)},children:(0,n.jsx)("source",{src:u.url,type:u.content_type})}),a&&(0,n.jsx)("button",{type:"button",className:G.videoButton,"aria-label":"View video on X",onClick:e=>{let t=e.currentTarget.previousSibling;e.preventDefault(),s(!1),t.load(),t.play().then(()=>{l(!0),t.focus()}).catch(e=>{console.error("Error playing video:",e),s(!0),l(!1)})},children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:G.videoButtonIcon,"aria-hidden":"true",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M21 12L4 2v20l17-10z"})})})}),!o&&!c&&(0,n.jsx)("div",{className:G.watchOnTwitter,children:(0,n.jsx)("a",{href:t.url,className:G.anchor,target:"_blank",rel:"noopener noreferrer",children:a?"Watch on X":"Continue watching on X"})}),c&&(0,n.jsx)("a",{href:t.url,className:i(G.anchor,G.viewReplies),target:"_blank",rel:"noopener noreferrer",children:"View replies"})]})},X=e=>(0,n.jsx)("img",{...e}),J=(e,t)=>{let r=56.25;return 1===t&&(r=100/e.original_info.width*e.original_info.height),2===t&&(r*=2),{width:"photo"===e.type?void 0:"unset",paddingBottom:`${r}%`}},Q=({tweet:e,components:t,quoted:r})=>{var a,s,o,l;let c=null!=(o=null==(a=e.mediaDetails)?void 0:a.length)?o:0,d=null!=(l=null==t?void 0:t.MediaImg)?l:X;return(0,n.jsx)("div",{className:i(A.root,!r&&A.rounded),children:(0,n.jsx)("div",{className:i(A.mediaWrapper,c>1&&A.grid2Columns,3===c&&A.grid3,c>4&&A.grid2x2),children:null==(s=e.mediaDetails)?void 0:s.map(t=>(0,n.jsx)(O.Fragment,{children:"photo"===t.type?(0,n.jsxs)("a",{href:e.url,className:i(A.mediaContainer,A.mediaLink),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("div",{className:A.skeleton,style:J(t,c)}),(0,n.jsx)(d,{src:V(t,"small"),alt:t.ext_alt_text||"Image",className:A.image,draggable:!0})]},t.media_url_https):(0,n.jsxs)("div",{className:A.mediaContainer,children:[(0,n.jsx)("div",{className:A.skeleton,style:J(t,c)}),(0,n.jsx)(H,{tweet:e,media:t})]},t.media_url_https)},t.media_url_https))})})},Y=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,weekday:"short",month:"short",day:"numeric",year:"numeric"}),Z=e=>{let t={};for(let r of e)t[r.type]=r.value;return t},K=e=>{let t=Z(Y.formatToParts(e)),r=`${t.hour}:${t.minute} ${t.dayPeriod}`,a=`${t.month} ${t.day}, ${t.year}`;return`${r} \xb7 ${a}`};var ee=r(6647);let et=({tweet:e})=>{let t=new Date(e.created_at),r=K(t);return(0,n.jsx)("a",{className:ee.root,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":r,children:(0,n.jsx)("time",{dateTime:t.toISOString(),children:r})})};var er=r(634);let ea=({tweet:e})=>(0,n.jsxs)("div",{className:er.info,children:[(0,n.jsx)(et,{tweet:e}),(0,n.jsx)("a",{className:er.infoLink,href:"https://help.x.com/en/x-for-websites-ads-info-and-privacy",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter for Websites, Ads Information and Privacy",children:(0,n.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:er.infoIcon,children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"})})})})]});var en=r(2409);let ei=e=>{let{tweet:t}=e,[r,a]=(0,O.useState)(!1);return(0,O.useEffect)(()=>{if(r){let e=setTimeout(()=>{a(!1)},6e3);return()=>clearTimeout(e)}},[r]),(0,n.jsxs)("button",{type:"button",className:en.copy,"aria-label":"Copy link",onClick:()=>{navigator.clipboard.writeText(t.url),a(!0)},children:[(0,n.jsx)("div",{className:en.copyIconWrapper,children:r?(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:en.copyIcon,"aria-hidden":"true",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"})})}):(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:en.copyIcon,"aria-hidden":"true",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"})})})}),(0,n.jsx)("span",{className:en.copyText,children:r?"Copied!":"Copy link"})]})},es=({tweet:e})=>{let t=W(e.favorite_count);return(0,n.jsxs)("div",{className:en.actions,children:[(0,n.jsxs)("a",{className:en.like,href:e.like_url,target:"_blank",rel:"noopener noreferrer","aria-label":`Like. This Tweet has ${t} likes`,children:[(0,n.jsx)("div",{className:en.likeIconWrapper,children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:en.likeIcon,"aria-hidden":"true",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"})})})}),(0,n.jsx)("span",{className:en.likeCount,children:t})]}),(0,n.jsxs)("a",{className:en.reply,href:e.reply_url,target:"_blank",rel:"noopener noreferrer","aria-label":"Reply to this Tweet on Twitter",children:[(0,n.jsx)("div",{className:en.replyIconWrapper,children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:en.replyIcon,"aria-hidden":"true",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"})})})}),(0,n.jsx)("span",{className:en.replyText,children:"Reply"})]}),(0,n.jsx)(ei,{tweet:e})]})};var eo=r(3958);let el=({tweet:e})=>(0,n.jsx)("div",{className:eo.replies,children:(0,n.jsx)("a",{className:eo.link,href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("span",{className:eo.text,children:0===e.conversation_count?"Read more on X":1===e.conversation_count?`Read ${W(e.conversation_count)} reply`:`Read ${W(e.conversation_count)} replies`})})});var ec=r(3657);let ed=e=>{let{tweet:t,children:r}=e;return(0,n.jsx)("div",{className:ec.root,onClick:e=>{e.preventDefault(),window.open(t.url,"_blank")},children:(0,n.jsx)("article",{className:ec.article,children:r})})};var eu=r(3955);let e_=({tweet:e})=>{let{user:t}=e;return(0,n.jsxs)("div",{className:eu.header,children:[(0,n.jsx)("a",{href:e.url,className:eu.avatar,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("div",{className:i(eu.avatarOverflow,"Square"===t.profile_image_shape&&eu.avatarSquare),children:(0,n.jsx)(f,{src:t.profile_image_url_https,alt:t.name,width:20,height:20})})}),(0,n.jsxs)("div",{className:eu.author,children:[(0,n.jsx)("div",{className:eu.authorText,children:(0,n.jsx)("span",{title:t.name,children:t.name})}),(0,n.jsx)(j,{user:t}),(0,n.jsx)("div",{className:eu.username,children:(0,n.jsxs)("span",{title:`@${t.screen_name}`,children:["@",t.screen_name]})})]})]})};var eh=r(8462);let ef=({tweet:e})=>(0,n.jsx)("p",{className:eh.root,lang:e.lang,dir:"auto",children:e.entities.map((e,t)=>(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}},t))}),ep=({tweet:e})=>{var t;return(0,n.jsxs)(ed,{tweet:e,children:[(0,n.jsx)(e_,{tweet:e}),(0,n.jsx)(ef,{tweet:e}),(null==(t=e.mediaDetails)?void 0:t.length)?(0,n.jsx)(Q,{quoted:!0,tweet:e}):null]})},em=({tweet:e,components:t})=>{var r;let a=(0,O.useMemo)(()=>U(e),[e]);return(0,n.jsxs)(o,{children:[(0,n.jsx)(y,{tweet:a,components:t}),a.in_reply_to_status_id_str&&(0,n.jsx)(k,{tweet:a}),(0,n.jsx)(T,{tweet:a}),(null==(r=a.mediaDetails)?void 0:r.length)?(0,n.jsx)(Q,{tweet:a,components:t}):null,a.quoted_tweet&&(0,n.jsx)(ep,{tweet:a.quoted_tweet}),(0,n.jsx)(ea,{tweet:a}),(0,n.jsx)(es,{tweet:a}),(0,n.jsx)(el,{tweet:a})]})};var ex=r(4236),ev=Object.prototype.hasOwnProperty;let ew=new WeakMap,eg=()=>{},ej=eg(),ey=Object,eb=e=>e===ej,ek=e=>"function"==typeof e,eN=(e,t)=>({...e,...t}),eS=e=>ek(e.then),eL={},eT={},eO="undefined",eI=typeof window!=eO,eR=typeof document!=eO,eE=eI&&"Deno"in window,eC=()=>eI&&typeof window.requestAnimationFrame!=eO,eq=(e,t)=>{let r=ew.get(e);return[()=>!eb(t)&&e.get(t)||eL,a=>{if(!eb(t)){let n=e.get(t);t in eT||(eT[t]=n),r[5](t,eN(n,a),n||eL)}},r[6],()=>!eb(t)&&t in eT?eT[t]:!eb(t)&&e.get(t)||eL]},eM=!0,[e$,ez]=eI&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[eg,eg],eV={initFocus:e=>(eR&&document.addEventListener("visibilitychange",e),e$("focus",e),()=>{eR&&document.removeEventListener("visibilitychange",e),ez("focus",e)}),initReconnect:e=>{let t=()=>{eM=!0,e()},r=()=>{eM=!1};return e$("online",t),e$("offline",r),()=>{ez("online",t),ez("offline",r)}}},eF=!O.useId,eB=!eI||eE,eW=e=>eC()?window.requestAnimationFrame(e):setTimeout(e,1),eD=eB?O.useEffect:O.useLayoutEffect,eP="undefined"!=typeof navigator&&navigator.connection,eU=!eB&&eP&&(["slow-2g","2g"].includes(eP.effectiveType)||eP.saveData),eA=new WeakMap,eG=(e,t)=>ey.prototype.toString.call(e)==="[object ".concat(t,"]"),eH=0,eX=e=>{let t,r;let a=typeof e,n=eG(e,"Date"),i=eG(e,"RegExp"),s=eG(e,"Object");if(ey(e)!==e||n||i)t=n?e.toJSON():"symbol"==a?e.toString():"string"==a?JSON.stringify(e):""+e;else{if(t=eA.get(e))return t;if(t=++eH+"~",eA.set(e,t),Array.isArray(e)){for(r=0,t="@";r<e.length;r++)t+=eX(e[r])+",";eA.set(e,t)}if(s){t="#";let a=ey.keys(e).sort();for(;!eb(r=a.pop());)eb(e[r])||(t+=r+":"+eX(e[r])+",");eA.set(e,t)}}return t},eJ=e=>{if(ek(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?eX(e):"",t]},eQ=0,eY=()=>++eQ;async function eZ(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[a,n,i,s]=t,o=eN({populateCache:!0,throwOnError:!0},"boolean"==typeof s?{revalidate:s}:s||{}),l=o.populateCache,c=o.rollbackOnError,d=o.optimisticData,u=e=>"function"==typeof c?c(e):!1!==c,_=o.throwOnError;if(ek(n)){let e=[];for(let t of a.keys())!/^\$(inf|sub)\$/.test(t)&&n(a.get(t)._k)&&e.push(t);return Promise.all(e.map(h))}return h(n);async function h(e){let r;let[n]=eJ(e);if(!n)return;let[s,c]=eq(a,n),[h,f,p,m]=ew.get(a),x=()=>{let t=h[n];return(ek(o.revalidate)?o.revalidate(s().data,e):!1!==o.revalidate)&&(delete p[n],delete m[n],t&&t[0])?t[0](2).then(()=>s().data):s().data};if(t.length<3)return x();let v=i,w=eY();f[n]=[w,0];let g=!eb(d),j=s(),y=j.data,b=j._c,k=eb(b)?y:b;if(g&&c({data:d=ek(d)?d(k,y):d,_c:k}),ek(v))try{v=v(k)}catch(e){r=e}if(v&&eS(v)){if(v=await v.catch(e=>{r=e}),w!==f[n][0]){if(r)throw r;return v}r&&g&&u(r)&&(l=!0,c({data:k,_c:ej}))}if(l&&!r&&(ek(l)?c({data:l(v,k),error:ej,_c:ej}):c({data:v,error:ej,_c:ej})),f[n][1]=eY(),Promise.resolve(x()).then(()=>{c({_c:ej})}),r){if(_)throw r;return}return v}}let eK=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},e1=(e,t)=>{if(!ew.has(e)){let r=eN(eV,t),a={},n=eZ.bind(ej,e),i=eg,s={},o=(e,t)=>{let r=s[e]||[];return s[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},l=(t,r,a)=>{e.set(t,r);let n=s[t];if(n)for(let e of n)e(r,a)},c=()=>{if(!ew.has(e)&&(ew.set(e,[a,{},{},{},n,l,o]),!eB)){let t=r.initFocus(setTimeout.bind(ej,eK.bind(ej,a,0))),n=r.initReconnect(setTimeout.bind(ej,eK.bind(ej,a,1)));i=()=>{t&&t(),n&&n(),ew.delete(e)}}};return c(),[e,n,c,i]}return[e,ew.get(e)[4]]},[e0,e2]=e1(new Map),e4=eN({onLoadingSlow:eg,onSuccess:eg,onError:eg,onErrorRetry:(e,t,r,a,n)=>{let i=r.errorRetryCount,s=n.retryCount,o=~~((Math.random()+.5)*(1<<(s<8?s:8)))*r.errorRetryInterval;(eb(i)||!(s>i))&&setTimeout(a,o,n)},onDiscarded:eg,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:eU?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:eU?5e3:3e3,compare:function e(t,r){var a,n;if(t===r)return!0;if(t&&r&&(a=t.constructor)===r.constructor){if(a===Date)return t.getTime()===r.getTime();if(a===RegExp)return t.toString()===r.toString();if(a===Array){if((n=t.length)===r.length)for(;n--&&e(t[n],r[n]););return -1===n}if(!a||"object"==typeof t){for(a in n=0,t)if(ev.call(t,a)&&++n&&!ev.call(r,a)||!(a in r)||!e(t[a],r[a]))return!1;return Object.keys(r).length===n}}return t!=t&&r!=r},isPaused:()=>!1,cache:e0,mutate:e2,fallback:{}},{isOnline:()=>eM,isVisible:()=>{let e=eR&&document.visibilityState;return eb(e)||"hidden"!==e}}),e3=(e,t)=>{let r=eN(e,t);if(t){let{use:a,fallback:n}=e,{use:i,fallback:s}=t;a&&i&&(r.use=a.concat(i)),n&&s&&(r.fallback=eN(n,s))}return r},e5=(0,O.createContext)({}),e6=eI&&window.__SWR_DEVTOOLS_USE__,e8=e6?window.__SWR_DEVTOOLS_USE__:[],e9=e=>ek(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],e7=()=>eN(e4,(0,O.useContext)(e5)),te=e8.concat(e=>(t,r,a)=>{let n=r&&((...e)=>{let[a]=eJ(t),[,,,n]=ew.get(e0);if(a.startsWith("$inf$"))return r(...e);let i=n[a];return eb(i)?r(...e):(delete n[a],i)});return e(t,n,a)}),tt=(e,t,r)=>{let a=t[e]||(t[e]=[]);return a.push(r),()=>{let e=a.indexOf(r);e>=0&&(a[e]=a[a.length-1],a.pop())}};e6&&(window.__SWR_DEVTOOLS_REACT__=O);let tr=()=>{};tr(),new WeakMap;let ta=O.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),tn={dedupe:!0};ey.defineProperty(e=>{let{value:t}=e,r=(0,O.useContext)(e5),a=ek(t),n=(0,O.useMemo)(()=>a?t(r):t,[a,r,t]),i=(0,O.useMemo)(()=>a?n:e3(r,n),[a,r,n]),s=n&&n.provider,o=(0,O.useRef)(ej);s&&!o.current&&(o.current=e1(s(i.cache||e0),n));let l=o.current;return l&&(i.cache=l[0],i.mutate=l[1]),eD(()=>{if(l)return l[2]&&l[2](),l[3]},[]),(0,O.createElement)(e5.Provider,eN(e,{value:i}))},"defaultValue",{value:e4});let ti=(a=(e,t,r)=>{let{cache:a,compare:n,suspense:i,fallbackData:s,revalidateOnMount:o,revalidateIfStale:l,refreshInterval:c,refreshWhenHidden:d,refreshWhenOffline:u,keepPreviousData:_}=r,[h,f,p,m]=ew.get(a),[x,v]=eJ(e),w=(0,O.useRef)(!1),g=(0,O.useRef)(!1),j=(0,O.useRef)(x),y=(0,O.useRef)(t),b=(0,O.useRef)(r),k=()=>b.current,N=()=>k().isVisible()&&k().isOnline(),[S,L,T,I]=eq(a,x),R=(0,O.useRef)({}).current,E=eb(s)?eb(r.fallback)?ej:r.fallback[x]:s,C=(e,t)=>{for(let r in R)if("data"===r){if(!n(e[r],t[r])&&(!eb(e[r])||!n(D,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},q=(0,O.useMemo)(()=>{let e=!!x&&!!t&&(eb(o)?!k().isPaused()&&!i&&!1!==l:o),r=t=>{let r=eN(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},a=S(),n=I(),s=r(a),c=a===n?s:r(n),d=s;return[()=>{let e=r(S());return C(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>c]},[a,x]),M=(0,ex.useSyncExternalStore)((0,O.useCallback)(e=>T(x,(t,r)=>{C(r,t)||e()}),[a,x]),q[0],q[1]),$=!w.current,z=h[x]&&h[x].length>0,V=M.data,F=eb(V)?E&&eS(E)?ta(E):E:V,B=M.error,W=(0,O.useRef)(F),D=_?eb(V)?eb(W.current)?F:W.current:V:F,P=(!z||!!eb(B))&&($&&!eb(o)?o:!k().isPaused()&&(i?!eb(F)&&l:eb(F)||l)),U=!!(x&&t&&$&&P),A=eb(M.isValidating)?U:M.isValidating,G=eb(M.isLoading)?U:M.isLoading,H=(0,O.useCallback)(async e=>{let t,a;let i=y.current;if(!x||!i||g.current||k().isPaused())return!1;let s=!0,o=e||{},l=!p[x]||!o.dedupe,c=()=>eF?!g.current&&x===j.current&&w.current:x===j.current,d={isValidating:!1,isLoading:!1},u=()=>{L(d)},_=()=>{let e=p[x];e&&e[1]===a&&delete p[x]},m={isValidating:!0};eb(S().data)&&(m.isLoading=!0);try{if(l&&(L(m),r.loadingTimeout&&eb(S().data)&&setTimeout(()=>{s&&c()&&k().onLoadingSlow(x,r)},r.loadingTimeout),p[x]=[i(v),eY()]),[t,a]=p[x],t=await t,l&&setTimeout(_,r.dedupingInterval),!p[x]||p[x][1]!==a)return l&&c()&&k().onDiscarded(x),!1;d.error=ej;let e=f[x];if(!eb(e)&&(a<=e[0]||a<=e[1]||0===e[1]))return u(),l&&c()&&k().onDiscarded(x),!1;let o=S().data;d.data=n(o,t)?o:t,l&&c()&&k().onSuccess(t,x,r)}catch(r){_();let e=k(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,l&&c()&&(e.onError(r,x,e),(!0===t||ek(t)&&t(r))&&(!k().revalidateOnFocus||!k().revalidateOnReconnect||N())&&e.onErrorRetry(r,x,e,e=>{let t=h[x];t&&t[0]&&t[0](3,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return s=!1,u(),!0},[x,a]),X=(0,O.useCallback)((...e)=>eZ(a,j.current,...e),[]);if(eD(()=>{y.current=t,b.current=r,eb(V)||(W.current=V)}),eD(()=>{if(!x)return;let e=H.bind(ej,tn),t=0,r=tt(x,h,(r,a={})=>{if(0==r){let r=Date.now();k().revalidateOnFocus&&r>t&&N()&&(t=r+k().focusThrottleInterval,e())}else if(1==r)k().revalidateOnReconnect&&N()&&e();else if(2==r)return H();else if(3==r)return H(a)});return g.current=!1,j.current=x,w.current=!0,L({_k:v}),P&&(eb(F)||eB?e():eW(e)),()=>{g.current=!0,r()}},[x]),eD(()=>{let e;function t(){let t=ek(c)?c(S().data):c;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!S().error&&(d||k().isVisible())&&(u||k().isOnline())?H(tn).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[c,d,u,x]),(0,O.useDebugValue)(D),i&&eb(F)&&x){if(!eF&&eB)throw Error("Fallback data is required when using Suspense in SSR.");y.current=t,b.current=r,g.current=!1;let e=m[x];if(eb(e)||ta(X(e)),eb(B)){let e=H(tn);eb(D)||(e.status="fulfilled",e.value=!0),ta(e)}else throw B}return{mutate:X,get data(){return R.data=!0,D},get error(){return R.error=!0,B},get isValidating(){return R.isValidating=!0,A},get isLoading(){return R.isLoading=!0,G}}},function(...e){let t=e7(),[r,n,i]=e9(e),s=e3(t,i),o=a,{use:l}=s,c=(l||[]).concat(te);for(let e=c.length;e--;)o=c[e](o);return o(r,n||s.fetcher||null,s)});class ts extends Error{constructor({message:e,status:t,data:r}){super(e),this.name="TwitterApiError",this.status=t,this.data=r}}let to=ti.default||ti;async function tl(e){let[t,r]=e,a=await fetch(t,r),n=await a.json();if(a.ok)return n.data||null;throw new ts({message:'Failed to fetch tweet at "'.concat(t,'" with "').concat(a.status,'".'),data:n,status:a.status})}let tc=(e,t,r)=>{let{isLoading:a,data:n,error:i}=to(()=>t||e?[t||e&&"".concat("https://react-tweet.vercel.app","/api/tweet/").concat(e),r]:null,tl,{revalidateIfStale:!1,revalidateOnFocus:!1,shouldRetryOnError:!1});return{isLoading:!!(a||void 0===n&&!i),data:n,error:i}},td=e=>{let{id:t,apiUrl:r,fallback:a=(0,n.jsx)(u,{}),components:i,fetchOptions:s,onError:o}=e,{data:l,error:c,isLoading:d}=tc(t,r,s);if(d)return a;if(c||!l){let e=(null==i?void 0:i.TweetNotFound)||h;return(0,n.jsx)(e,{error:o?o(c):c})}return(0,n.jsx)(em,{tweet:l,components:i})}}}]);