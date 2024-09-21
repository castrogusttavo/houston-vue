
<template>
  <Icon :iconName="'bot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bot'
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
