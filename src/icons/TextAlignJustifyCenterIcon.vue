
<template>
  <Icon :iconName="'text-align-justify-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAlignJustifyCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-align-justify-center'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
