
<template>
  <Icon :iconName="'align-box-top-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxTopCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-top-center'
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
