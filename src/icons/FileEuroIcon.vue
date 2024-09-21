
<template>
  <Icon :iconName="'file-euro'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileEuroIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-euro'
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
