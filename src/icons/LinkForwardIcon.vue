
<template>
  <Icon :iconName="'link-forward'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LinkForwardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-forward'
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
