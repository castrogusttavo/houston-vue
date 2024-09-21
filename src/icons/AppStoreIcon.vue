
<template>
  <Icon :iconName="'app-store'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppStoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'app-store'
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
