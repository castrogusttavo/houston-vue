
<template>
  <Icon :iconName="'bing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bing'
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
