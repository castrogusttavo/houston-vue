
<template>
  <Icon :iconName="'browser'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BrowserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'browser'
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
