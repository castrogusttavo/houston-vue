
<template>
  <Icon :iconName="'scribd'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScribdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scribd'
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
