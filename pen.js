function setClock(time) {
    clock.innerHTML = time;
  }
  
  function animationNavigation(setTime, thisClass, el) {
    var fullClassList = ['animationStage1', 'animationStage2', 'animationStage3', 'animationStage4', 'animationStage5', 'animationStage6'];
    var thisClassIndex = fullClassList.indexOf(thisClass);
    if (thisClassIndex > -1) {
      fullClassList.splice(thisClassIndex, 1);
    }
  
    setClock(setTime);
  
    var clickSiblings = Array.prototype.filter.call(el.parentNode.children, function (child) {
      return child !== el;
    });
    clickSiblings.forEach(function (sib) {
      classie.remove(sib, 'active');
    });
    classie.add(el, 'active');
  
    if (!classie.has(animationControl, thisClass)) {
      classie.add(animationControl, thisClass);
    }
    classie.remove(animationControl, fullClassList[0]);
    classie.remove(animationControl, fullClassList[1]);
    classie.remove(animationControl, fullClassList[2]);
    classie.remove(animationControl, fullClassList[3]);
    classie.remove(animationControl, fullClassList[4]);
  }
  
  var clock = document.getElementById('clock-time');
  if (clock) {
    setClock('7:00am');
  }
  
  //Animation
  var animationControl = document.getElementById('lightingAnimation');
  if (animationControl) {
    document.getElementById('schedule').addEventListener('click', function (e) {
      var el = this;
      animationNavigation('7:00am', 'animationStage1', el);
    });
    document.getElementById('daylight').addEventListener('click', function (e) {
      var el = this;
      animationNavigation('9:00am', 'animationStage2', el);
    });
    document.getElementById('occupancy').addEventListener('click', function (e) {
      var el = this;
      animationNavigation('11:00am', 'animationStage3', el);
    });
    document.getElementById('dimming').addEventListener('click', function (e) {
      var el = this;
      animationNavigation('1:00pm', 'animationStage4', el);
    });
    document.getElementById('demandResponse').addEventListener('click', function (e) {
      var el = this;
      animationNavigation('3:00pm', 'animationStage5', el);
    });
    document.getElementById('dimmingControls').addEventListener('click', function (e) {
      var el = this;
      animationNavigation('5:00pm', 'animationStage6', el);
    });
  }