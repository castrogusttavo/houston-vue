
<template>
  <Icon :iconName="'code-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CodeCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'code-circle'
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
