
<template>
  <Icon :iconName="'collections-bookmark'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CollectionsBookmarkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'collections-bookmark'
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
