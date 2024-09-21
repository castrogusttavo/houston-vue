
<template>
  <Icon :iconName="'prayer-rug-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrayerRug02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prayer-rug-02'
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
