class Floor:
    def __init__(self, pos, height):
        self.pos = pos
        self.height = height    
        self.velocity = np.array([0,0,0])
        self.actor = None