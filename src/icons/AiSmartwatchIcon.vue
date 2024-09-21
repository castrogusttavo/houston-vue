
<template>
  <Icon :iconName="'ai-smartwatch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiSmartwatchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-smartwatch'
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
