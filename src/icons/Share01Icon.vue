
<template>
  <Icon :iconName="'share-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Share01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-01'
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
