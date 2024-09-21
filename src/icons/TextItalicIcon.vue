
<template>
  <Icon :iconName="'text-italic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextItalicIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-italic'
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
