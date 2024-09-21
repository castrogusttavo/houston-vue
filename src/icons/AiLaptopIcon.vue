
<template>
  <Icon :iconName="'ai-laptop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiLaptopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-laptop'
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
