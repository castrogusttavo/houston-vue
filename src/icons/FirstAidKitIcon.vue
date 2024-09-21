
<template>
  <Icon :iconName="'first-aid-kit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FirstAidKitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'first-aid-kit'
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
