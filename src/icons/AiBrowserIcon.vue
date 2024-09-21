
<template>
  <Icon :iconName="'ai-browser'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBrowserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-browser'
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
