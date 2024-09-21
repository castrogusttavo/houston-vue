
<template>
  <Icon :iconName="'link-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Link05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-05'
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
