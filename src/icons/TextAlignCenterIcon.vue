
<template>
  <Icon :iconName="'text-align-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAlignCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-align-center'
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
