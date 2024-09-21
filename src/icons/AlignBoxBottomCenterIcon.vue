
<template>
  <Icon :iconName="'align-box-bottom-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxBottomCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-bottom-center'
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
