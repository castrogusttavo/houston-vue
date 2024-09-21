
<template>
  <Icon :iconName="'equal-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EqualSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equal-sign'
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
