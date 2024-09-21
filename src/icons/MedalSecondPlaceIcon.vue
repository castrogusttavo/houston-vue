
<template>
  <Icon :iconName="'medal-second-place'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedalSecondPlaceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-second-place'
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
