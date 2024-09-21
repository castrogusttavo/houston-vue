
<template>
  <Icon :iconName="'multiplication-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MultiplicationSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'multiplication-sign'
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
