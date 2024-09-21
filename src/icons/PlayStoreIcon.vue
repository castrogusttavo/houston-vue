
<template>
  <Icon :iconName="'play-store'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayStoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-store'
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
