
<template>
  <Icon :iconName="'html-5'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Html5Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'html-5'
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
