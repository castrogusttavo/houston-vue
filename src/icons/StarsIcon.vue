
<template>
  <Icon :iconName="'stars'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StarsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stars'
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
