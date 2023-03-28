window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.letter--l', {
        scrollY: {
            translateX: [
              [0, "elOutY"],
              [0, 400],
            ],
            opacity: [
                [0, 'elOutY'],
                [1, 0]
            ]
          }
    })

    lax.addElements('.letter--a', {
        scrollY: {
            translateX: [
                [0, 'elOutY'],
                [0, -400]
            ],
            opacity: [
                [0, 'elOutY'],
                [1, 0]
            ]
        }
    })

    lax.addElements('.letter--x', {
        scrollY: {
            translateY: [
                [0, 'elOutY'],
                [0, 250]
            ],
            scale: [
                [100, 'elOutY'],
                [1, 10]
            ],
            opacity: [
                [0, 'screenHeight / 2', 'screenHeight'],
                [1, 1, 0]
            ]
        }
    })

    lax.addElements('.scroll-down-el', {
        scrollY: {
            'letter-spacing': [
                [0, 300],
                [0, 100],
                {
                    cssUnit: 'px'
                }
            ],
            opacity: [
                [0, 'elCenterY + 200'],
                [1, 0]
            ]
        }
    })
  }