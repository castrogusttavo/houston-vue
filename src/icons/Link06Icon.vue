
<template>
  <Icon :iconName="'link-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Link06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-06'
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
