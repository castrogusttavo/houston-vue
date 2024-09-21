
<template>
  <Icon :iconName="'fencing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FencingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fencing'
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
