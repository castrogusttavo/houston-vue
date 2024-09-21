
<template>
  <Icon :iconName="'cleaning-bucket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CleaningBucketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cleaning-bucket'
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
