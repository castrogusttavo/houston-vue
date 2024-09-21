
<template>
  <Icon :iconName="'telegram'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TelegramIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'telegram'
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
