
<template>
  <Icon :iconName="'image-done-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageDone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-done-01'
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
