
<template>
  <Icon :iconName="'moon-cloud-mid-snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudMidSnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-mid-snow'
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
