
<template>
  <Icon :iconName="'hand-prayer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPrayerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-prayer'
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
