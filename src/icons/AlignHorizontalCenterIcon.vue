
<template>
  <Icon :iconName="'align-horizontal-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignHorizontalCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-horizontal-center'
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
