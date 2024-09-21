
<template>
  <Icon :iconName="'document-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DocumentCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'document-code'
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
