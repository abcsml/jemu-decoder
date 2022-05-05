export default {
	mask: '-----------------110-----0010011',
	args: {
		rs1: ['19:15'],
		rd: ['11:7'],
		imm: ['S32', '31:20']
	},
	exec: {
		$: 'rd = rs1 | sext(imm, 12)'
	},
	meta: {
		encoding: 'I',
		importance: NaN
	}
}
