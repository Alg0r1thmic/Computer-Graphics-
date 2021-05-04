class Sphere:
    def __init__(self, pos, radius):
        self.pos = pos
        self.radius = radius    
        self.velocity = [0,-10,0] # la esfera cae, por eso tiene una velocida hacia abajo
        self.last_velocity = [0,-10,0]
        self.actor = None
