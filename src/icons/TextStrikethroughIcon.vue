
<template>
  <Icon :iconName="'text-strikethrough'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextStrikethroughIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-strikethrough'
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
