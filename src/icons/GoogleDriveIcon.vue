
<template>
  <Icon :iconName="'google-drive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleDriveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-drive'
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
