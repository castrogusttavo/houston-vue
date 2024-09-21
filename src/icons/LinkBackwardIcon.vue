
<template>
  <Icon :iconName="'link-backward'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LinkBackwardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-backward'
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
