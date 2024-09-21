
<template>
  <Icon :iconName="'pi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pi'
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
