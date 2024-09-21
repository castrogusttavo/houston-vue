
<template>
  <Icon :iconName="'ai-game'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiGameIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-game'
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
