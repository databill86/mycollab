$wnd.com_mycollab_widgetset_MyCollabMobileWidgetSet.runAsyncCallback9("function RTc(){}\nfunction TTc(){}\nfunction VTc(){}\nfunction OAd(){Q1b.call(this)}\nfunction s5b(a,b){return UC(a.q.Xo(b))}\nfunction vbe(){s1b.call(this);this.J=b3e;this.a=new Ppe}\nfunction C2c(c,a){var b=c;a.notifyChildrenOfSizeChange=qxe(function(){b.vl()})}\nfunction K2c(b){try{b!=null&&eval('{ var document = $doc; var window = $wnd; '+b+'}')}catch(a){}}\nfunction z2c(b){if(b&&b.iLayoutJS){try{b.iLayoutJS();return true}catch(a){return false}}else{return false}}\nfunction y2c(a,b){var c,d;for(c=xle(new yle(a.f));c.a.Kf();){d=UC(Ele(c));if(_C(a.f.Xo(d))===_C(b)){return d}}return null}\nfunction D2c(a,b){var c,d;d=y2c(a,b);d!=null&&a.f.$o(d);c=SC(a.a.Xo(b),545);if(c){a.a.$o(b);return Rub(a,c)}else if(b){return Rub(a,b)}return false}\nfunction A2c(a){var b,c,d;d=(fqb(),a.bc).getElementsByTagName('IMG');for(b=0;b<d.length;b++){c=d[b];dqb.Ge(c,PBe)}}\nfunction E2c(a,b){var c,d,e;if(($k(),b).hasAttribute(SZe)){e=el(b,SZe);a.e.Zo(e,b);Ik(b,'')}else{d=(fqb(),nsb(b));for(c=0;c<d;c++){E2c(a,msb(b,c))}}}\nfunction F2c(a,b,c){var d,e;if(!b){return}d=TC(a.e.Xo(c));if(!d&&a.d){throw new Ohe('No location '+c+' found')}e=SC(a.f.Xo(c),9);if(e==b){return}!!e&&D2c(a,e);a.d||(d=(fqb(),a.bc));Hub(a,b,(fqb(),d));a.f.Zo(c,b)}\nfunction G2c(a,b){var c,d,e;d=b.Ng();if(!d._e()){return}e=SC(a.a.Xo(d),545);if($cc(b.Lg())){if(!e){c=y2c(a,d);Rub(a,d);e=new gdc(b,a.b);Gub(a,e,TC(a.e.Xo(c)));a.a.Zo(d,e)}Vcc(e.a)}else{if(e){c=y2c(a,d);Rub(a,e);Gub(a,d,TC(a.e.Xo(c)));a.a.$o(d)}}}\nfunction NTc(c){var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Mk(Agb,Z2e,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Mk(Agb,$2e,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Mk(Agb,_2e,d)}\nfunction H2c(){var a;Sub.call(this);this.e=new Ppe;this.f=new Ppe;this.a=new Ppe;Ctb(this,(fqb(),Sm($doc)));a=this.bc.style;Xo(a,GMe,(bp(),kze));Xo(a,QOe,(Fs(),dDe));Xo(a,dPe,dDe);(O6b(),!N6b&&(N6b=new e7b),O6b(),N6b).a.i&&Xo(a,Iye,(Kr(),NMe));Gk(this.bc,b3e);Ytb(this.bc,AYe,true)}\nfunction B2c(a,b,c){var d;b=x2c(a,b);d=kfc(c+'/layouts/');b=Wie(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=\"((?![a-z]+:)[^/][^\"]+)\"',a3e+d+'$3\"');b=Wie(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=[^\"]((?![a-z]+:)[^/][^ />]+)[ />]',a3e+d+'$3\"');b=Wie(b,'(<[^>]+style=\"[^\"]*url\\\\()((?![a-z]+:)[^/][^\"]+)(\\\\)[^>]*>)','$1 '+d+'$2 $3');Ik((fqb(),a.bc),b);a.e.hf();E2c(a,a.bc);A2c(a);a.c=mqb(a.bc);!a.c&&(a.c=a.bc);C2c(a,a.c);a.d=true}\nfunction x2c(a,b){var c,d,e,f,g,h,j,k;b=Wie(b,'_UID_',a.g+'__');a.i='';d=0;f=b.toLowerCase();h='';j=f.indexOf('<script',0);while(j>0){h+=b.substr(d,j-d);j=f.indexOf('>',j);e=f.indexOf('<\\/script>',j);a.i+=b.substr(j+1,e-(j+1))+';';g=d=e+9;j=f.indexOf('<script',g)}h+=fje(b,d,b.length-d);f=h.toLowerCase();k=f.indexOf('<body');if(k<0){h=h}else{k=f.indexOf('>',k)+1;c=f.indexOf('<\\/body>',k);c>k?(h=h.substr(k,c-k)):(h=fje(h,k,h.length-k))}return h}\nfunction NAd(a){var b,c,d;if(a.a){return}c=(!a.U&&(a.U=lJb(a)),SC(SC(SC(a.U,6),117),392)).c;b=(!a.U&&(a.U=lJb(a)),SC(SC(SC(a.U,6),117),392)).b;c!=null&&(b=s5b(a.N,'layouts/'+c+'.html'));if(b!=null){B2c((!a.L&&(a.L=VJb(a)),SC(a.L,268)),b,t5b(a.N))}else{d=c!=null?'Layout file layouts/'+c+'.html is missing.':'Layout file not specified.';Ik(stb((!a.L&&(a.L=VJb(a)),SC(a.L,268))),'<em>'+d+' Components will be drawn for debug purposes.<\\/em>')}a.a=true}\nvar Z2e='childLocations',$2e='templateContents',_2e='templateName',a3e='<$1 $2src=\"',b3e='v-customlayout';amb(1813,1,IOe);_.vc=function QTc(){FUc(this.b,Agb,Ofb);vUc(this.b,aTe,L8);xUc(this.b,R3,rTe,new RTc);xUc(this.b,L8,rTe,new TTc);xUc(this.b,Agb,rTe,new VTc);DUc(this.b,L8,aEe,new nUc(R3));DUc(this.b,L8,ZDe,new nUc(Agb));NTc(this.b);BUc(this.b,Agb,Z2e,new oUc(aVe,LC(HC(b2,1),sTe,4,0,[new nUc(pfb),new nUc(gjb)])));BUc(this.b,Agb,$2e,new nUc(gjb));BUc(this.b,Agb,_2e,new nUc(gjb));tUc(this.b,L8,new dUc(r2,yTe,LC(HC(gjb,1),Cxe,2,4,[CWe])));Uxc((!Nxc&&(Nxc=new $xc),Nxc),this.a.d)};amb(1815,1,lXe,RTc);_.Ek=function STc(a,b){return new H2c};var P1=bhe(wRe,'ConnectorBundleLoaderImpl/9/1/1',1815,ajb);amb(1816,1,lXe,TTc);_.Ek=function UTc(a,b){return new OAd};var Q1=bhe(wRe,'ConnectorBundleLoaderImpl/9/1/2',1816,ajb);amb(1817,1,lXe,VTc);_.Ek=function WTc(a,b){return new vbe};var R1=bhe(wRe,'ConnectorBundleLoaderImpl/9/1/3',1817,ajb);amb(268,211,{15:1,12:1,11:1,13:1,26:1,33:1,16:1,29:1,10:1,9:1,268:1,21:1},H2c);_.gf=function I2c(a){throw new Jje};_.hf=function J2c(){Bub(this);this.f.hf();this.a.hf()};_.vl=function L2c(){};_.Ce=function M2c(a){jub(this,a);fqb();if(_rb(($k(),a).type)==PBe){Icc(this,true);$rb(a,true)}};_.bf=function N2c(){kub(this);!!this.c&&(this.c.notifyChildrenOfSizeChange=null,undefined)};_.jf=function O2c(a){return D2c(this,a)};_.Ve=function P2c(a){Gk((fqb(),this.bc),a);Ytb(this.bc,AYe,true)};_.d=false;_.i='';var R3=bhe(_De,'VCustomLayout',268,MJ);amb(1814,265,{7:1,17:1,128:1,99:1,137:1,25:1,30:1,34:1,31:1,265:1,152:1,259:1,32:1,3:1},OAd);_.Lg=function PAd(){return !this.U&&(this.U=lJb(this)),SC(SC(SC(this.U,6),117),392)};_.xg=function QAd(){return !this.U&&(this.U=lJb(this)),SC(SC(SC(this.U,6),117),392)};_.qi=function RAd(){return !this.U&&(this.U=lJb(this)),SC(SC(SC(this.U,6),117),392)};_.Ng=function SAd(){return !this.L&&(this.L=VJb(this)),SC(this.L,268)};_.zg=function TAd(){(!this.L&&(this.L=VJb(this)),SC(this.L,268)).b=this.N;(!this.L&&(this.L=VJb(this)),SC(this.L,268)).g=this.P};_.Ii=function UAd(){z2c((!this.L&&(this.L=VJb(this)),SC(this.L,268),mqb(stb((!this.L&&(this.L=VJb(this)),SC(this.L,268))))))};_.fh=function VAd(b){var c,d,e,f,g,h;NAd(this);for(d=FKb(this).pf();d.Kf();){c=SC(d.Lf(),17);e=UC((!this.U&&(this.U=lJb(this)),SC(SC(SC(this.U,6),117),392)).a.Xo(c));try{F2c((!this.L&&(this.L=VJb(this)),SC(this.L,268)),c.Ng(),e)}catch(a){a=Zlb(a);if(WC(a,38)){zve(Bve((Wge(L8),L8.n)),\"Child not rendered as no slot with id '\"+e+\"' has been defined\")}else throw Ylb(a)}}for(g=b.a.pf();g.Kf();){f=SC(g.Lf(),17);if(f.vg()==this){continue}h=f.Ng();h._e()&&D2c((!this.L&&(this.L=VJb(this)),SC(this.L,268)),h)}};_.Bg=function WAd(a){YJb(this,a);NAd(this);K2c((!this.L&&(this.L=VJb(this)),SC(this.L,268)).i);(!this.L&&(this.L=VJb(this)),SC(this.L,268)).i=null};_.gh=function XAd(a){G2c((!this.L&&(this.L=VJb(this)),SC(this.L,268)),a)};_.bi=function YAd(a,b){};_.a=false;var L8=bhe('com.vaadin.client.ui.customlayout',VXe,1814,x2);amb(392,117,{6:1,41:1,117:1,392:1,3:1},vbe);var Agb=bhe('com.vaadin.shared.ui.customlayout','CustomLayoutState',392,Ofb);qxe(Uh)(9);\n//# sourceURL=com.mycollab.widgetset.MyCollabMobileWidgetSet-9.js\n")